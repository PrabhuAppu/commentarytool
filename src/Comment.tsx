import EditorJS from '@editorjs/editorjs';
import React, { useState, useEffect } from 'react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles, Customizations, Text } from 'office-ui-fabric-react';
import { CommentCommandBar } from './Buttontest';

import {CommentToolCommandBar} from './EditorToolbar';
import $ from 'jquery';

import './CommentEditor.css';

const Header = require('@editorjs/header');
const List = require('@editorjs/list');
const Paragraph = require('@editorjs/paragraph');
const Marker = require('@editorjs/marker');
const Warning = require('@editorjs/warning');

export const CommentHorizontalStack: React.FunctionComponent = () => {

    const [editorObject, setEditorObject] = useState(null);
    const saveData = (editor: Object) => {
        // if (editor != null) {
        //     editor.save().then((outputData) => {
        //         console.log('Article data: ', outputData)
        //     }).catch((error) => {
        //         console.log('Saving failed: ', error)
        //     });
        // }
    }
    useEffect(() => {
        // const editor = new EditorJS({
        //     /**
        //      * Create a holder for the Editor and pass its ID
        //      */
        //     holder: 'editorjs',
        //     placeholder: 'Comments will be generated here',
        //     /**
        //      * Available Tools list.
        //      * Pass Tool's class or Settings object for each Tool you want to use
        //      */
        //     tools: {
        //         header: {
        //             class: Header,
        //             inlineToolbar: true
        //         },
        //         list: {
        //             class: List,
        //             inlineToolbar: true,
        //         },
        //         paragraph: {
        //             class: Paragraph,
        //             inlineToolbar: true,
        //         },
        //         Marker: {
        //             class: Marker,
        //             shortcut: 'CMD+SHIFT+M',
        //         }

        //         // ...
        //     },
        //     autofocus: true
        //     /**
        //      * Previously saved data that should be rendered
        //      */
        //     // data: {}
        // });

        // setEditorObject(editor);


        // Mix the nodes from prosemirror-schema-list into the basic schema to
        // create a schema with list support.
        // const mySchema = new Model.Schema({
        //     nodes: addListNodes(Model.Schema.spec.nodes, "paragraph block*", "block"),
        //     marks: Model.Schema.spec.marks
        // })
        // richTextField.document.designMode = 'On';
        document.getElementById("editorjs").contentEditable = true;
        // // $('iframe').load( function() {

        // $('iframe').contents().find("head").append($("<style type='text/css'>  body{font-family: 'Segoe UI';} .newLine{font-size: 1em;cursor:pointer}  </style>"));
        // // });

        // node_walk: walk the element tree, stop when func(node) returns false
        function node_walk(node, func) {
            var result = func(node);
            for (node = node.firstChild; result !== false && node; node = node.nextSibling)
                result = node_walk(node, func);
            return result;
        };

        // getCaretPosition: return [start, end] as offsets to elem.textContent that
        //   correspond to the selected portion of text
        //   (if start == end, caret is at given position and no text is selected)
        function getCaretPosition(elem) {
            var sel = window.getSelection();
            var cum_length = [0, 0];

            if (sel.anchorNode == elem)
                cum_length = [sel.anchorOffset, sel.extentOffset];
            else {
                var nodes_to_find = [sel.anchorNode, sel.extentNode];
                if (!elem.contains(sel.anchorNode) || !elem.contains(sel.extentNode))
                    return undefined;
                else {
                    var found = [0, 0];
                    var i;
                    node_walk(elem, function (node) {
                        for (i = 0; i < 2; i++) {
                            if (node == nodes_to_find[i]) {
                                found[i] = true;
                                if (found[i == 0 ? 1 : 0])
                                    return false; // all done
                            }
                        }

                        if (node.textContent && !node.firstChild) {
                            for (i = 0; i < 2; i++) {
                                if (!found[i])
                                    cum_length[i] += node.textContent.length;
                            }
                        }
                    });
                    cum_length[0] += sel.anchorOffset;
                    cum_length[1] += sel.extentOffset;
                }
            }
            if (cum_length[0] <= cum_length[1])
                return cum_length;
            return [cum_length[1], cum_length[0]];
        }


        $('#editorjs').on("mousedown mouseup keydown keyup", ()=>{
            console.log(getCaretPosition(document.getElementById('editorjs')));
        });

        // const myFrame = document.getElementById('myFrame');

        // myFrame.contentWindow.InitCode = function () {
        //     console.log("Look at me, executed inside an iframe!", myFrame.contentWindow);
        //     $(myFrame.contentWindow.document.body).html('<div class="newLine">+</div>')
        //     $(myFrame.contentWindow.document.body).find('.newLine').click(function(){
        //         $(this).remove();
        //     })
        // }

        // myFrame.contentWindow.InitCode();

    }, []);

    const customTheme = Customizations.getSettings(['theme'], 'Stack').theme.palette;

    // Styles definition
    const stackStyles: IStackStyles = {
        root: {
            background: customTheme.white,
            height: '100%',
            width: '100%',
        },
    };
    const stackItemStylesLeft: IStackItemStyles = {
        root: {
            alignItems: 'center',
            background: customTheme.white,
            color: customTheme.black,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: 50,

        },
    };

    const stackItemStylesRight = {

        background: customTheme.white,
        color: customTheme.black,
        width: '100%',
        padding: 20,
        overflowY: 'scroll'
    };

    // Tokens definition
    const outerStackTokens: IStackTokens = { childrenGap: 0 };
    const innerStackTokens: IStackTokens = {
        childrenGap: 0,
        padding: 10,

    };

    return (


        <Stack tokens={outerStackTokens} styles={stackStyles}>
            <Text variant={'large'} styles={stackItemStylesLeft} block>
                Comments
            </Text>
            <CommentCommandBar object={editorObject} />
            <CommentToolCommandBar/>
            <div id="editorjs" style={{

                background: customTheme.white,
                color: customTheme.black,

                padding: 20,
                overflowY: 'auto',
                height: '100%',
                wordWrap: 'break-word',


            }}>
                {/* <iframe id="myFrame" name="richTextField" height='100%' width="100%" style={{
                    border: '0px',
                    fontFamily: 'Segoe UI'
                }}></iframe> */}
            </div>
        </Stack>
        // <Stack tokens={outerStackTokens}>
        //     <Stack styles={stackStyles} tokens={innerStackTokens}>
        //         <Stack.Item grow={2} styles={stackItemStylesLeft}>
        //             <Text variant={'large'} block>
        //                 Comments
        //             </Text>
        //         </Stack.Item>
        //         <Stack.Item grow={6} styles={stackItemStylesRight}>
        //             <div id="editorjs" ></div>
        //         </Stack.Item>
        //     </Stack>
        // </Stack>
    );
};