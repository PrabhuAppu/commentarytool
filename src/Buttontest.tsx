import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const CommentCommandBar: React.FunctionComponent = (props) => {
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
  // {
  //   key: 'newItem',
  //   text: 'New',
  //   cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
  //   iconProps: { iconName: 'Add' },
  //   subMenuProps: {
  //     items: [
  //       {
  //         key: 'emailMessage',
  //         text: 'Email message',
  //         iconProps: { iconName: 'Mail' },
  //         ['data-automation-id']: 'newEmailButton', // optional
  //       },
  //       {
  //         key: 'calendarEvent',
  //         text: 'Calendar event',
  //         iconProps: { iconName: 'Calendar' },
  //       },
  //     ],
  //   },
  // },
  // {
  //   key: 'upload',
  //   text: 'Upload',
  //   iconProps: { iconName: 'Upload' },
  //   href: 'https://developer.microsoft.com/en-us/fluentui',
  // },
  {
    key: 'save',
    text: 'Save',
    iconProps: { iconName: 'Save' },
    onClick: () => saveText,
  },
  // {
  //   key: 'clear',
  //   text: 'Clear',
  //   iconProps: { iconName: 'Clear' },
  //   onClick: () => console.log('Clear'),
  // },
  // {
  //   key: 'download',
  //   text: 'Download',
  //   iconProps: { iconName: 'Download' },
  //   onClick: () => console.log('Download'),
  // },
  {
    key: 'addComment',
    text: 'Add Comment',
    ariaLabel: 'Add Comment for the selected information',
    iconProps: { iconName: 'Add' },
    onClick: () => console.log('Add'),
  },
  {
    key: 'view',
    text: 'View Rules',
    iconProps: { iconName: 'List' },
    onClick: () => console.log('List'),
  },
  
];

const _overflowItems: ICommandBarItemProps[] = [
  // { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  // { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  // { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
  { key: 'create', text: 'Create Rule', onClick: () => console.log('Rename'), iconProps: { iconName: 'Add' } },
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
  {
    key: 'download',
    text: 'Download',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Download',
    iconOnly: true,
    iconProps: { iconName: 'Download' },
    onClick: () => console.log('Download'),
  },
  {
    key: 'info',
    text: 'Info',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Info',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info'),
  },
  {
    key: 'clear',
    text: 'Clear',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Clear',
    iconOnly: true,
    iconProps: { iconName: 'Clear' },
    onClick: () => console.log('Clear'),
  },
];