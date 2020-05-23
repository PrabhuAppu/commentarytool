import * as React from 'react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles, Customizations } from 'office-ui-fabric-react';
import { CommentHorizontalStack } from './Comment';


export const ContainerHorizontalStack: React.FunctionComponent = (props) => {

    const customTheme = Customizations.getSettings(['theme'], 'Stack').theme.palette;

    // Styles definition
    const stackStyles: IStackStyles = {
        root: {
            background: customTheme.white,
            height: 'calc(100vh - 50px)'
        },
    };
    const stackItemStylesLeft: IStackItemStyles = {
        root: {
            alignItems: 'center',
            background: customTheme.neutralLighterAlt,
            color: customTheme.black,
            display: 'flex',
            justifyContent: 'center',
            
        },
    };

    const stackItemStylesRight: IStackItemStyles = {
        root: {
            alignItems: 'center',
            background: customTheme.white,
            color: customTheme.black,
            display: 'flex',
            justifyContent: 'center',
            
        },
    };

    // Tokens definition
    const stackTokens: IStackTokens = {
        childrenGap: 5,
        padding: 10
    };
    const outerStackTokens: IStackTokens = { childrenGap: 5, maxWidth: 300 };

    return (

        <div style={{
            width: 'auto',
            position:'relative',
            background: customTheme.white,
            height: 'calc(100% - 90px)',
            display: 'flex',
            padding: 10,
            justifyContent: 'space-between'
        }}>
            <div style={{
                background: customTheme.white,
                color: customTheme.black,
                justifyContent: 'center',
                minWidth: '300px',
                height:'100%',
                // display:'inline-block',
                flex: '2',
                margin: '0 5px',
                padding: 10,
            }}>
                <CommentHorizontalStack/>
            </div>
            <div style={{
                background: customTheme.neutralLighterAlt,
                color: customTheme.black,
                justifyContent: 'center',
                minWidth: '600px',
                height:'100%',
                flex: '5',
                margin: '0 5px',
                padding: 10,
            }}>
                
            </div>
        </div>
        // <Stack wrap horizontal styles={stackStyles} tokens={stackTokens}>
        //     <Stack.Item grow={2}  styles={stackItemStylesLeft} tokens={outerStackTokens}>
        //         <CommentHorizontalStack/>

        //         {/* Stack Properties
        //             Although the Stack component has a number of different properties, there are three in particular that define the overall layout that the component has:

        //             Direction: Refers to whether the stacking of children components is horizontal or vertical. By default the Stack component is vertical, but can be turned horizontal by adding the horizontal property when using the component.
        //             Alignment: Refers to how the children components are aligned inside the container. This is controlled via the verticalAlign and horizontalAlign properties. One thing to notice here is that while flexbox containers align always across the cross axis, Stack aims to remove the mental strain involved in this process by making the verticalAlign and horizontalAlign properties always follow the vertical and horizontal axes, respectively, regardless of the direction of the Stack.
        //             Spacing: Refers to the space that exists between children components inside the Stack. This is controlled via the gap and verticalGap properties. */}
        //     </Stack.Item>
        //     <Stack.Item grow={6} styles={stackItemStylesRight}>
        //         Grow is 2
        //     </Stack.Item>

        // </Stack>
    );
};