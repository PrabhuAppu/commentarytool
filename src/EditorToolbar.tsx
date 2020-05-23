import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const CommentToolCommandBar: React.FunctionComponent = (props) => {
  return (
    <div>
      <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};

const saveText = ()=>{}

const _items: ICommandBarItemProps[] = [
    {
        key: 'header1',
        text: 'Header 1',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Header 1',
        iconOnly: true,
        iconProps: { iconName: 'Header1' },
        onClick: () => document.execCommand('formatBlock', false, 'H2'),
      },
      {
        key: 'header2',
        text: 'Header 2',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Header 2',
        iconOnly: true,
        iconProps: { iconName: 'Header2' },
        onClick: () => document.execCommand('formatBlock', false, 'H3'),
      },
      {
        key: 'bold',
        text: 'Bold',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Bold',
        iconOnly: true,
        iconProps: { iconName: 'SemiboldWeight' },
        onClick: () => document.execCommand('bold', false, null),
      },
      {
        key: 'italic',
        text: 'Italic',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Italic',
        iconOnly: true,
        iconProps: { iconName: 'Italic' },
        onClick: () =>document.execCommand('italic', false, null),
      },
      {
        key: 'Highlight',
        text: 'Highlight',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Highlight',
        iconOnly: true,
        iconProps: { iconName: 'FabricTextHighlightComposite' },
        onClick: () => document.execCommand('hiliteColor', false, '#f4abb1'),
      },
      {
        key: 'BulletedList',
        text: 'BulletedList',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'BulletedList',
        iconOnly: true,
        iconProps: { iconName: 'BulletedList' },
        onClick: () => document.execCommand('insertUnorderedList', false, null),
      },
       {
        key: 'NumberedList',
        text: 'NumberedList',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'NumberedList',
        iconOnly: true,
        iconProps: { iconName: 'NumberedList' },
        onClick: () => document.execCommand('insertOrderedList', false, null),
      },
  
];

const _overflowItems: ICommandBarItemProps[] = [
  // { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  // { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  // { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
//   { key: 'create', text: 'Create Rule', onClick: () => console.log('Rename'), iconProps: { iconName: 'Add' } },
];

const _farItems: ICommandBarItemProps[] = [
  // {
  //   key: 'tile',
  //   text: 'Grid view',
  //   // This needs an ariaLabel since it's icon-only
  //   ariaLabel: 'Grid view',
  //   iconOnly: true,
  //   iconProps: { iconName: 'Tiles' },
  //   onClick: () => console.log('Tiles'),
  // },
  
 
];