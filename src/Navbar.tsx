import * as React from 'react';
import {
    DefaultPalette,
    Stack,
    IStackStyles,
    IStackTokens,
    IStackItemStyles,
    ISeparatorStyles,
    Customizations,
    PrimaryButton
} from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
// import { Icon } from '@uifabric/icons';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';



export const NavHorizontalStack: React.FunctionComponent = () => {

    const customTheme = Customizations.getSettings(['theme'], 'Stack').theme.palette;
    console.log(customTheme);




    // Styles definition
    const stackStyles: IStackStyles = {
        root: {
            background: customTheme.themeTertiary,
        },
    };
    const stackItemStyles: IStackItemStyles = {
        root: {
            color: customTheme.themeDarkAlt,
            padding: 5,
        },
    };

    const stackItemStylesWelcome: IStackItemStyles = {
        root: {
            color: customTheme.themeDarkAlt,
            padding: 5,
            textAlign: 'right',
        },
    };

    const stackItemStylesImage: IStackItemStyles = {
        root: {
            color: customTheme.themeDarkAlt,
            padding: 5,
            textAlign: 'center',
        },
    };



    const stackItemStylesSeparator: IStackItemStyles = {
        root: {
            color: customTheme.themeDarkAlt,
            padding: 5,
            width: 30
        },
    };

    const stackItemStylesIcon: IStackItemStyles = {
        root: {
            selectors: { // add selectors here
                ':hover': {
                    backgroundColor: customTheme.themePrimary,
                    color: customTheme.white,
                },
            },
            color: customTheme.themeDarkAlt,
            padding: 5,
            width: 20,
            cursor: 'pointer',
            alignItems: 'center',
            textAlign: 'center',
        },
    };

    const itemAlignmentsStackStyles: IStackStyles = {
        root: {
            background: customTheme.neutralLighterAlt,
            height: 50,
        },
    };

    const separatorStyle: ISeparatorStyles = {
        content: {

        },
        root: {
            selectors: { // add selectors here
                '::after': {
                    backgroundColor: customTheme.themeDarkAlt,
                },
            },
            padding: 5,
            width: 20
        },
    };

    // Tokens definition
    const containerStackTokens: IStackTokens = { childrenGap: 5 };
    const horizontalGapStackTokens: IStackTokens = {
        childrenGap: 10,
        padding: 10,
    };
    const itemAlignmentsStackTokens: IStackTokens = {
        childrenGap: 5,
        padding: 10,
    };
    const clickableStackTokens: IStackTokens = {
        padding: 10,
    };

    const iconClass = mergeStyles({
        fontSize: 20,
        fontWeight: 900
    });

    const NavIcon = () => <FontIcon iconName="GlobalNavButton" className={iconClass} />;
    const UserIcon = () => <FontIcon iconName="Contact" className={iconClass} />;

    return (

        <Stack horizontal disableShrink styles={itemAlignmentsStackStyles} tokens={itemAlignmentsStackTokens}>
            <Stack.Item grow={0.1} align="center" styles={stackItemStylesIcon}>
                <NavIcon />
            </Stack.Item>
            <Stack.Item grow={0.1} align="center" styles={stackItemStylesSeparator}>
                <Separator styles={separatorStyle} vertical />
            </Stack.Item>
            <Stack.Item grow={10} align="center" styles={stackItemStyles}>
                <Text variant={'large'} block>
                    Commentary Builder
                </Text>
            </Stack.Item>
            <Stack.Item grow={1} align="center" styles={stackItemStylesWelcome}>
                <span>Welcome Prabhu Appu</span>
            </Stack.Item>
            <Stack.Item grow={0.1} align="center" styles={stackItemStylesImage}>
                <UserIcon />
            </Stack.Item>
        </Stack>

    );
};

function _onClick(): void {
    alert('Clicked Stack');
}