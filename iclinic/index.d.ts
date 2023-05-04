import { border, font, opacity, shadow, spacing } from "../base";
declare const color: {
    readonly branding: {
        readonly "10": "#001f3d";
        readonly "20": "#002a52";
        readonly "30": "#07356e";
        readonly "40": "#003e8a";
        readonly "50": "#024aa2";
        readonly "60": "#0857b4";
        readonly "70": "#0b63cb";
        readonly "80": "#046eec";
        readonly "90": "#0a7bff";
        readonly "100": "#3894ff";
        readonly "110": "#57a4ff";
        readonly "120": "#75b5ff";
        readonly "130": "#99c8ff";
        readonly "140": "#b8d9ff";
        readonly "150": "#d6e9ff";
        readonly "160": "#f0f7ff";
        readonly alfa: {
            readonly "90": "#046eeccf";
            readonly "100": "#046eecba";
            readonly "110": "#046eec9e";
            readonly "120": "#046eec82";
            readonly "130": "#046eec61";
            readonly "140": "#046eec45";
            readonly "150": "#046eec26";
            readonly "160": "#046eec0f";
        };
    };
    readonly interactive: {
        readonly accent: {
            readonly default: "#0b63cb";
            readonly hovered: "#0857b4";
            readonly pressed: "#024aa2";
        };
        readonly subtle: {
            readonly default: "#f0f7ff";
            readonly hovered: "#d6e9ff";
            readonly pressed: "#b8d9ff";
        };
        readonly disabled: "#0000001a";
        readonly alert: {
            readonly accent: {
                readonly default: "#cf0303";
                readonly hovered: "#b80000";
                readonly pressed: "#a00303";
            };
            readonly subtle: {
                readonly default: "#fef6f6";
                readonly hovered: "#ffe0e0";
                readonly pressed: "#fac7c7";
            };
        };
    };
    readonly typeface: {
        readonly strong: "#000000d6";
        readonly pure: "#000000bd";
        readonly smooth: "#0000008c";
        readonly meld: "#0000003b";
        readonly feedback: {
            readonly alert: "#b80000";
            readonly warning: "#8a4900";
            readonly success: "#076908";
            readonly info: "#0857b4";
        };
        readonly onInteractive: {
            readonly accent: "#f0f7ff";
            readonly subtle: "#003e8a";
            readonly alert: {
                readonly accent: "#fef6f6";
                readonly subtle: "#890101";
            };
            readonly disabled: "#0000004d";
        };
    };
    readonly surface: {
        readonly accent: {
            readonly default: "#0000000a";
            readonly hovered: "#0000001a";
            readonly pressed: "#0000002b";
        };
        readonly subtle: {
            readonly default: "#ffffffe3";
            readonly hovered: "#0000000a";
            readonly pressed: "#0000001a";
        };
        readonly disabled: "#0000001a";
        readonly selected: {
            readonly default: "#046eec0f";
            readonly hovered: "#046eec26";
            readonly pressed: "#046eec45";
        };
        readonly feedback: {
            readonly alert: {
                readonly accent: "#f63737";
                readonly subtle: "#fef6f6";
            };
            readonly warning: {
                readonly accent: "#c76a00";
                readonly subtle: "#fff5e0";
            };
            readonly success: {
                readonly accent: "#379539";
                readonly subtle: "#f2f8f2";
            };
            readonly info: {
                readonly accent: "#0a7bff";
                readonly subtle: "#f0f7ff";
            };
        };
    };
    readonly icon: {
        readonly default: "#0000007d";
        readonly hovered: "#0000008c";
        readonly pressed: "#00000099";
        readonly activated: "#0b63cb";
        readonly disabled: "#0000003b";
        readonly feedback: {
            readonly alert: "#f63737";
            readonly warning: "#c76a00";
            readonly success: "#379539";
            readonly info: "#0a7bff";
        };
        readonly onInteractive: {
            readonly accent: "#f0f7ff";
            readonly subtle: "#003e8a";
            readonly alert: {
                readonly accent: "#fef6f6";
                readonly subtle: "#890101";
            };
        };
    };
    readonly border: {
        readonly accent: "#0000003b";
        readonly subtle: "#0000001a";
        readonly activated: "#0b63cb";
        readonly disabled: "#0000002b";
        readonly feedback: {
            readonly alert: "#e02424";
            readonly warning: "#c76a00";
            readonly success: "#0e8610";
            readonly info: "#046eec";
        };
    };
    readonly background: {
        readonly "1": "#fff";
        readonly "2": "#f7f7f7";
        readonly "3": "#e6e6e6";
    };
    readonly link: {
        readonly default: "#0b63cb";
        readonly visited: "#641ec2";
    };
    readonly focus: {
        readonly default: "#0b63cb";
        readonly inset: "#ffffffd6";
    };
    readonly highlight: {
        readonly red: {
            readonly "1": "#fd5d5d";
            readonly "2": "#e02424";
            readonly "3": "#b80000";
        };
        readonly blue: {
            readonly "1": "#3894ff";
            readonly "2": "#046eec";
            readonly "3": "#0857b4";
        };
        readonly teal: {
            readonly "1": "#12a588";
            readonly "2": "#0f856d";
            readonly "3": "#0b6553";
        };
        readonly orange: {
            readonly "1": "#eb7005";
            readonly "2": "#b95804";
            readonly "3": "#914503";
        };
        readonly ruby: {
            readonly "1": "#e368a0";
            readonly "2": "#d82777";
            readonly "3": "#a81f5d";
        };
        readonly purple: {
            readonly "1": "#ab7ce9";
            readonly "2": "#8f51e1";
            readonly "3": "#732dd2";
        };
    };
    readonly others: {
        readonly backdrop: "#0000006e";
        readonly divider: "#0000001a";
        readonly skeleton: "#0000001a";
    };
    readonly inverse: {
        readonly interactive: {
            readonly accent: {
                readonly default: "#f0f7ff";
                readonly hovered: "#d6e9ff";
                readonly pressed: "#b8d9ff";
            };
            readonly subtle: {
                readonly default: "#0b63cb";
                readonly hovered: "#0857b4";
                readonly pressed: "#024aa2";
            };
            readonly disabled: "#ffffff5c";
            readonly alert: {
                readonly accent: {
                    readonly default: "#ffe0e0";
                    readonly hovered: "#fac7c7";
                    readonly pressed: "#fdafaf";
                };
                readonly subtle: {
                    readonly default: "#cf0303";
                    readonly hoverd: "#b80000";
                    readonly pressed: "#a00303";
                };
            };
        };
        readonly typeface: {
            readonly strong: "#ffffffe3";
            readonly pure: "#ffffffd6";
            readonly smooth: "#ffffffb5";
            readonly meld: "#ffffff78";
            readonly feedback: {
                readonly alert: "#fe9494";
                readonly warning: "#f59f00";
                readonly success: "#88bf89";
                readonly info: "#75b5ff";
            };
            readonly onInteractive: {
                readonly accent: "#003e8a";
                readonly subtle: "#f0f7ff";
                readonly alert: {
                    readonly accent: "#890101";
                    readonly subtle: "#fef6f6";
                };
                readonly disabled: "#ffffff78";
            };
        };
        readonly surface: {
            readonly accent: {
                readonly default: "#ffffff1c";
                readonly hovered: "#ffffff2b";
                readonly pressed: "#ffffff36";
            };
            readonly subtle: {
                readonly default: "#0000000a";
                readonly hovered: "#ffffff1c";
                readonly pressed: "#ffffff2b";
            };
            readonly disabled: "#ffffff2b";
            readonly selected: {
                readonly default: "#046eec82";
                readonly hovered: "#046eec9e";
                readonly pressed: "#046eecba";
            };
            readonly feedback: {
                readonly alert: {
                    readonly accent: "#f63737";
                    readonly subtle: "#fd5d5d0f";
                };
                readonly warning: {
                    readonly accent: "#c76a00";
                    readonly subtle: "#db790014";
                };
                readonly success: {
                    readonly accent: "#379539";
                    readonly subtle: "#37953912";
                };
                readonly info: {
                    readonly accent: "#0a7bff";
                    readonly subtle: "#046eec0f";
                };
            };
        };
        readonly icon: {
            readonly default: "#ffffffd6";
            readonly hovered: "#ffffffc4";
            readonly pressed: "#ffffffb5";
            readonly activated: "#99c8ff";
            readonly disabled: "#ffffff78";
            readonly feedback: {
                readonly alert: "#fd5d5d";
                readonly warning: "#db7900";
                readonly success: "#56a457";
                readonly info: "#3894ff";
            };
            readonly onInteractive: {
                readonly accent: "#003e8a";
                readonly subtle: "#f0f7ff";
                readonly alert: {
                    readonly accent: "#890101";
                    readonly subtle: "#fef6f6";
                };
            };
        };
        readonly border: {
            readonly accent: "#ffffff94";
            readonly subtle: "#ffffff45";
            readonly activated: "#75b5ff";
            readonly disable: "#ffffff2b";
            readonly feedback: {
                readonly alert: "#f63737";
                readonly warning: "#c76a00";
                readonly success: "#379539";
                readonly info: "#0a7bff";
            };
        };
        readonly background: {
            readonly "1": "#1f1f1f";
            readonly "2": "#292929";
            readonly "3": "#363636";
        };
        readonly link: {
            readonly default: "#d6e9ff";
            readonly visited: "#8f51e1";
        };
        readonly focus: {
            readonly default: "#75b5ff";
            readonly inset: "#0000000a";
        };
        readonly highlight: {
            readonly red: {
                readonly "1": "#e02424";
                readonly "2": "#fd5d5d";
                readonly "3": "#fe9494";
            };
            readonly blue: {
                readonly "1": "#046eec";
                readonly "2": "#3894ff";
                readonly "3": "#75b5ff";
            };
            readonly teal: {
                readonly "1": "#0f856d";
                readonly "2": "#12a588";
                readonly "3": "#31c4a6";
            };
            readonly orange: {
                readonly "1": "#b95804";
                readonly "2": "#eb7005";
                readonly "3": "#fb9b46";
            };
            readonly ruby: {
                readonly "1": "#d82777";
                readonly "2": "#e368a0";
                readonly "3": "#ec98be";
            };
            readonly purple: {
                readonly "1": "#8f51e1";
                readonly "2": "#ab7ce9";
                readonly "3": "#c4a3f0";
            };
        };
        readonly others: {
            readonly backdrop: "#000000b3";
            readonly divider: "#ffffff45";
            readonly skeleton: "#ffffff45";
        };
    };
    readonly brand: {
        readonly interactive: {
            readonly accent: {
                readonly default: "#f0f7ff";
                readonly hovered: "#d6e9ff";
                readonly pressed: "#b8d9ff";
            };
            readonly subtle: {
                readonly default: "#0000003b";
                readonly hovered: "#0000004d";
                readonly pressed: "#0000005e";
            };
            readonly disabled: "#ffffff5c";
            readonly alert: {
                readonly accent: {
                    readonly default: "#ffe0e0";
                    readonly hovered: "#fac7c7";
                    readonly pressed: "#fe9494";
                };
                readonly subtle: {
                    readonly default: "#cf0303";
                    readonly hovered: "#b80000";
                    readonly pressed: "#a00303";
                };
            };
        };
        readonly typeface: {
            readonly strong: "#fff";
            readonly pure: "#ffffffe3";
            readonly smooth: "#ffffffd6";
            readonly meld: "#ffffff69";
            readonly feedback: {
                readonly alert: "#ffe0e0";
                readonly warning: "#ffe3ad";
                readonly success: "#daecda";
                readonly info: "#d6e9ff";
            };
            readonly onInteractive: {
                readonly accent: "#003e8a";
                readonly subtle: "#f0f7ff";
                readonly alert: {
                    readonly subtle: "#fef6f6";
                    readonly accent: "#890101";
                };
                readonly disabled: "#ffffff94";
            };
        };
        readonly surface: {
            readonly accent: {
                readonly default: "#0000001a";
                readonly hovered: "#0000002b";
                readonly pressed: "#0000003b";
            };
            readonly subtle: {
                readonly default: "#0000000a";
                readonly hovered: "#0000001a";
                readonly pressed: "#0000002b";
            };
            readonly disabled: "#0000002b";
            readonly selected: {
                readonly default: "#0000003b";
                readonly hovered: "#0000004d";
                readonly pressed: "#0000004d";
            };
            readonly feedback: {
                readonly alert: {
                    readonly accent: "#fdafaf";
                    readonly subtle: "#fd5d5d0f";
                };
                readonly warning: {
                    readonly accent: "#ffb82e";
                    readonly subtle: "#db790014";
                };
                readonly success: {
                    readonly accent: "#a1cea1";
                    readonly subtle: "#37953912";
                };
                readonly info: {
                    readonly accent: "#99c8ff";
                    readonly subtle: "#046eec0f";
                };
            };
        };
        readonly icon: {
            readonly default: "#ffffffd6";
            readonly hovered: "#ffffffc4";
            readonly pressed: "#ffffffb5";
            readonly activated: "#d6e9ff";
            readonly disabled: "#ffffff94";
            readonly feedback: {
                readonly alert: "#fac7c7";
                readonly warning: "#ffcd6b";
                readonly success: "#bcdcbc";
                readonly info: "#b8d9ff";
            };
            readonly onInteractive: {
                readonly accent: "#003e8a";
                readonly subtle: "#f0f7ff";
                readonly alert: {
                    readonly accent: "#890101";
                    readonly subtle: "#fef6f6";
                };
            };
        };
        readonly border: {
            readonly accent: "#ffffffa3";
            readonly subtle: "#ffffff85";
            readonly activated: "#d6e9ff";
            readonly disabled: "#ffffff78";
            readonly feedback: {
                readonly alert: "#fac7c7";
                readonly warning: "#ffcd6b";
                readonly success: "#bcdcbc";
                readonly info: "#b8d9ff";
            };
        };
        readonly background: {
            readonly "1": "#0b63cb";
            readonly "2": "#0857b4";
            readonly "3": "#024aa2";
        };
        readonly link: {
            readonly default: "#d6e9ff";
            readonly visited: "#ab7ce9";
        };
        readonly focus: {
            readonly default: "#d6e9ff";
            readonly inset: "#046eec0f";
        };
        readonly others: {
            readonly backdrop: "#0000006e";
            readonly divider: "#ffffff5c";
            readonly skeleton: "#ffffffa3";
        };
        readonly highlight: {
            readonly red: {
                readonly "1": "#fdafaf";
                readonly "2": "#fac7c7";
                readonly "3": "#ffe0e0";
            };
            readonly blue: {
                readonly "1": "#99c8ff";
                readonly "2": "#b8d9ff";
                readonly "3": "#d6e9ff";
            };
            readonly teal: {
                readonly "1": "#68d4bf";
                readonly "2": "#8de2d1";
                readonly "3": "#bcf0e6";
            };
            readonly orange: {
                readonly "1": "#fcb06e";
                readonly "2": "#fdc99b";
                readonly "3": "#fee1c8";
            };
            readonly ruby: {
                readonly "1": "#f1b1ce";
                readonly "2": "#f5c7dc";
                readonly "3": "#f9dde9";
            };
            readonly purple: {
                readonly "1": "#d2b8f4";
                readonly "2": "#e0ccfa";
                readonly "3": "#eee2fd";
            };
        };
    };
}, shadowBrand: {
    readonly level: {
        readonly "1": "0px 1px 2px 0px #d6e9ff, 0px 5px 4px -4px #d6e9ff";
        readonly "2": "0px 2px 2px 0px #d6e9ff, 0px 0px 2px 0px #d6e9ff";
        readonly "3": "0px 12px 12px -8px #d6e9ff, 0px 0px 4px 0px #d6e9ff";
        readonly "4": "0px 32px 40px -16px #d6e9ff, 0px 2px 6px 0px #d6e9ff";
        readonly "5": "0px 24px 48px -12px #d6e9ff, 0px 48px 64px -24px #d6e9ff";
        readonly "6": "0px 24px 48px -8px #d6e9ff, 0px 48px 64px -24px #d6e9ff";
    };
};
export { border, font, opacity, shadow, spacing, color, shadowBrand };
export declare const axiomTheme: {
    border: {
        readonly radius: {
            readonly none: "0px";
            readonly sm: "4px";
            readonly md: "8px";
            readonly lg: "16px";
            readonly xl: "24px";
            readonly xxl: "32px";
            readonly circular: "100%";
        };
        readonly width: {
            readonly none: "0px";
            readonly xs: "1px";
            readonly sm: "2px";
        };
    };
    color: {
        readonly branding: {
            readonly "10": "#001f3d";
            readonly "20": "#002a52";
            readonly "30": "#07356e";
            readonly "40": "#003e8a";
            readonly "50": "#024aa2";
            readonly "60": "#0857b4";
            readonly "70": "#0b63cb";
            readonly "80": "#046eec";
            readonly "90": "#0a7bff";
            readonly "100": "#3894ff";
            readonly "110": "#57a4ff";
            readonly "120": "#75b5ff";
            readonly "130": "#99c8ff";
            readonly "140": "#b8d9ff";
            readonly "150": "#d6e9ff";
            readonly "160": "#f0f7ff";
            readonly alfa: {
                readonly "90": "#046eeccf";
                readonly "100": "#046eecba";
                readonly "110": "#046eec9e";
                readonly "120": "#046eec82";
                readonly "130": "#046eec61";
                readonly "140": "#046eec45";
                readonly "150": "#046eec26";
                readonly "160": "#046eec0f";
            };
        };
        readonly interactive: {
            readonly accent: {
                readonly default: "#0b63cb";
                readonly hovered: "#0857b4";
                readonly pressed: "#024aa2";
            };
            readonly subtle: {
                readonly default: "#f0f7ff";
                readonly hovered: "#d6e9ff";
                readonly pressed: "#b8d9ff";
            };
            readonly disabled: "#0000001a";
            readonly alert: {
                readonly accent: {
                    readonly default: "#cf0303";
                    readonly hovered: "#b80000";
                    readonly pressed: "#a00303";
                };
                readonly subtle: {
                    readonly default: "#fef6f6";
                    readonly hovered: "#ffe0e0";
                    readonly pressed: "#fac7c7";
                };
            };
        };
        readonly typeface: {
            readonly strong: "#000000d6";
            readonly pure: "#000000bd";
            readonly smooth: "#0000008c";
            readonly meld: "#0000003b";
            readonly feedback: {
                readonly alert: "#b80000";
                readonly warning: "#8a4900";
                readonly success: "#076908";
                readonly info: "#0857b4";
            };
            readonly onInteractive: {
                readonly accent: "#f0f7ff";
                readonly subtle: "#003e8a";
                readonly alert: {
                    readonly accent: "#fef6f6";
                    readonly subtle: "#890101";
                };
                readonly disabled: "#0000004d";
            };
        };
        readonly surface: {
            readonly accent: {
                readonly default: "#0000000a";
                readonly hovered: "#0000001a";
                readonly pressed: "#0000002b";
            };
            readonly subtle: {
                readonly default: "#ffffffe3";
                readonly hovered: "#0000000a";
                readonly pressed: "#0000001a";
            };
            readonly disabled: "#0000001a";
            readonly selected: {
                readonly default: "#046eec0f";
                readonly hovered: "#046eec26";
                readonly pressed: "#046eec45";
            };
            readonly feedback: {
                readonly alert: {
                    readonly accent: "#f63737";
                    readonly subtle: "#fef6f6";
                };
                readonly warning: {
                    readonly accent: "#c76a00";
                    readonly subtle: "#fff5e0";
                };
                readonly success: {
                    readonly accent: "#379539";
                    readonly subtle: "#f2f8f2";
                };
                readonly info: {
                    readonly accent: "#0a7bff";
                    readonly subtle: "#f0f7ff";
                };
            };
        };
        readonly icon: {
            readonly default: "#0000007d";
            readonly hovered: "#0000008c";
            readonly pressed: "#00000099";
            readonly activated: "#0b63cb";
            readonly disabled: "#0000003b";
            readonly feedback: {
                readonly alert: "#f63737";
                readonly warning: "#c76a00";
                readonly success: "#379539";
                readonly info: "#0a7bff";
            };
            readonly onInteractive: {
                readonly accent: "#f0f7ff";
                readonly subtle: "#003e8a";
                readonly alert: {
                    readonly accent: "#fef6f6";
                    readonly subtle: "#890101";
                };
            };
        };
        readonly border: {
            readonly accent: "#0000003b";
            readonly subtle: "#0000001a";
            readonly activated: "#0b63cb";
            readonly disabled: "#0000002b";
            readonly feedback: {
                readonly alert: "#e02424";
                readonly warning: "#c76a00";
                readonly success: "#0e8610";
                readonly info: "#046eec";
            };
        };
        readonly background: {
            readonly "1": "#fff";
            readonly "2": "#f7f7f7";
            readonly "3": "#e6e6e6";
        };
        readonly link: {
            readonly default: "#0b63cb";
            readonly visited: "#641ec2";
        };
        readonly focus: {
            readonly default: "#0b63cb";
            readonly inset: "#ffffffd6";
        };
        readonly highlight: {
            readonly red: {
                readonly "1": "#fd5d5d";
                readonly "2": "#e02424";
                readonly "3": "#b80000";
            };
            readonly blue: {
                readonly "1": "#3894ff";
                readonly "2": "#046eec";
                readonly "3": "#0857b4";
            };
            readonly teal: {
                readonly "1": "#12a588";
                readonly "2": "#0f856d";
                readonly "3": "#0b6553";
            };
            readonly orange: {
                readonly "1": "#eb7005";
                readonly "2": "#b95804";
                readonly "3": "#914503";
            };
            readonly ruby: {
                readonly "1": "#e368a0";
                readonly "2": "#d82777";
                readonly "3": "#a81f5d";
            };
            readonly purple: {
                readonly "1": "#ab7ce9";
                readonly "2": "#8f51e1";
                readonly "3": "#732dd2";
            };
        };
        readonly others: {
            readonly backdrop: "#0000006e";
            readonly divider: "#0000001a";
            readonly skeleton: "#0000001a";
        };
        readonly inverse: {
            readonly interactive: {
                readonly accent: {
                    readonly default: "#f0f7ff";
                    readonly hovered: "#d6e9ff";
                    readonly pressed: "#b8d9ff";
                };
                readonly subtle: {
                    readonly default: "#0b63cb";
                    readonly hovered: "#0857b4";
                    readonly pressed: "#024aa2";
                };
                readonly disabled: "#ffffff5c";
                readonly alert: {
                    readonly accent: {
                        readonly default: "#ffe0e0";
                        readonly hovered: "#fac7c7";
                        readonly pressed: "#fdafaf";
                    };
                    readonly subtle: {
                        readonly default: "#cf0303";
                        readonly hoverd: "#b80000";
                        readonly pressed: "#a00303";
                    };
                };
            };
            readonly typeface: {
                readonly strong: "#ffffffe3";
                readonly pure: "#ffffffd6";
                readonly smooth: "#ffffffb5";
                readonly meld: "#ffffff78";
                readonly feedback: {
                    readonly alert: "#fe9494";
                    readonly warning: "#f59f00";
                    readonly success: "#88bf89";
                    readonly info: "#75b5ff";
                };
                readonly onInteractive: {
                    readonly accent: "#003e8a";
                    readonly subtle: "#f0f7ff";
                    readonly alert: {
                        readonly accent: "#890101";
                        readonly subtle: "#fef6f6";
                    };
                    readonly disabled: "#ffffff78";
                };
            };
            readonly surface: {
                readonly accent: {
                    readonly default: "#ffffff1c";
                    readonly hovered: "#ffffff2b";
                    readonly pressed: "#ffffff36";
                };
                readonly subtle: {
                    readonly default: "#0000000a";
                    readonly hovered: "#ffffff1c";
                    readonly pressed: "#ffffff2b";
                };
                readonly disabled: "#ffffff2b";
                readonly selected: {
                    readonly default: "#046eec82";
                    readonly hovered: "#046eec9e";
                    readonly pressed: "#046eecba";
                };
                readonly feedback: {
                    readonly alert: {
                        readonly accent: "#f63737";
                        readonly subtle: "#fd5d5d0f";
                    };
                    readonly warning: {
                        readonly accent: "#c76a00";
                        readonly subtle: "#db790014";
                    };
                    readonly success: {
                        readonly accent: "#379539";
                        readonly subtle: "#37953912";
                    };
                    readonly info: {
                        readonly accent: "#0a7bff";
                        readonly subtle: "#046eec0f";
                    };
                };
            };
            readonly icon: {
                readonly default: "#ffffffd6";
                readonly hovered: "#ffffffc4";
                readonly pressed: "#ffffffb5";
                readonly activated: "#99c8ff";
                readonly disabled: "#ffffff78";
                readonly feedback: {
                    readonly alert: "#fd5d5d";
                    readonly warning: "#db7900";
                    readonly success: "#56a457";
                    readonly info: "#3894ff";
                };
                readonly onInteractive: {
                    readonly accent: "#003e8a";
                    readonly subtle: "#f0f7ff";
                    readonly alert: {
                        readonly accent: "#890101";
                        readonly subtle: "#fef6f6";
                    };
                };
            };
            readonly border: {
                readonly accent: "#ffffff94";
                readonly subtle: "#ffffff45";
                readonly activated: "#75b5ff";
                readonly disable: "#ffffff2b";
                readonly feedback: {
                    readonly alert: "#f63737";
                    readonly warning: "#c76a00";
                    readonly success: "#379539";
                    readonly info: "#0a7bff";
                };
            };
            readonly background: {
                readonly "1": "#1f1f1f";
                readonly "2": "#292929";
                readonly "3": "#363636";
            };
            readonly link: {
                readonly default: "#d6e9ff";
                readonly visited: "#8f51e1";
            };
            readonly focus: {
                readonly default: "#75b5ff";
                readonly inset: "#0000000a";
            };
            readonly highlight: {
                readonly red: {
                    readonly "1": "#e02424";
                    readonly "2": "#fd5d5d";
                    readonly "3": "#fe9494";
                };
                readonly blue: {
                    readonly "1": "#046eec";
                    readonly "2": "#3894ff";
                    readonly "3": "#75b5ff";
                };
                readonly teal: {
                    readonly "1": "#0f856d";
                    readonly "2": "#12a588";
                    readonly "3": "#31c4a6";
                };
                readonly orange: {
                    readonly "1": "#b95804";
                    readonly "2": "#eb7005";
                    readonly "3": "#fb9b46";
                };
                readonly ruby: {
                    readonly "1": "#d82777";
                    readonly "2": "#e368a0";
                    readonly "3": "#ec98be";
                };
                readonly purple: {
                    readonly "1": "#8f51e1";
                    readonly "2": "#ab7ce9";
                    readonly "3": "#c4a3f0";
                };
            };
            readonly others: {
                readonly backdrop: "#000000b3";
                readonly divider: "#ffffff45";
                readonly skeleton: "#ffffff45";
            };
        };
        readonly brand: {
            readonly interactive: {
                readonly accent: {
                    readonly default: "#f0f7ff";
                    readonly hovered: "#d6e9ff";
                    readonly pressed: "#b8d9ff";
                };
                readonly subtle: {
                    readonly default: "#0000003b";
                    readonly hovered: "#0000004d";
                    readonly pressed: "#0000005e";
                };
                readonly disabled: "#ffffff5c";
                readonly alert: {
                    readonly accent: {
                        readonly default: "#ffe0e0";
                        readonly hovered: "#fac7c7";
                        readonly pressed: "#fe9494";
                    };
                    readonly subtle: {
                        readonly default: "#cf0303";
                        readonly hovered: "#b80000";
                        readonly pressed: "#a00303";
                    };
                };
            };
            readonly typeface: {
                readonly strong: "#fff";
                readonly pure: "#ffffffe3";
                readonly smooth: "#ffffffd6";
                readonly meld: "#ffffff69";
                readonly feedback: {
                    readonly alert: "#ffe0e0";
                    readonly warning: "#ffe3ad";
                    readonly success: "#daecda";
                    readonly info: "#d6e9ff";
                };
                readonly onInteractive: {
                    readonly accent: "#003e8a";
                    readonly subtle: "#f0f7ff";
                    readonly alert: {
                        readonly subtle: "#fef6f6";
                        readonly accent: "#890101";
                    };
                    readonly disabled: "#ffffff94";
                };
            };
            readonly surface: {
                readonly accent: {
                    readonly default: "#0000001a";
                    readonly hovered: "#0000002b";
                    readonly pressed: "#0000003b";
                };
                readonly subtle: {
                    readonly default: "#0000000a";
                    readonly hovered: "#0000001a";
                    readonly pressed: "#0000002b";
                };
                readonly disabled: "#0000002b";
                readonly selected: {
                    readonly default: "#0000003b";
                    readonly hovered: "#0000004d";
                    readonly pressed: "#0000004d";
                };
                readonly feedback: {
                    readonly alert: {
                        readonly accent: "#fdafaf";
                        readonly subtle: "#fd5d5d0f";
                    };
                    readonly warning: {
                        readonly accent: "#ffb82e";
                        readonly subtle: "#db790014";
                    };
                    readonly success: {
                        readonly accent: "#a1cea1";
                        readonly subtle: "#37953912";
                    };
                    readonly info: {
                        readonly accent: "#99c8ff";
                        readonly subtle: "#046eec0f";
                    };
                };
            };
            readonly icon: {
                readonly default: "#ffffffd6";
                readonly hovered: "#ffffffc4";
                readonly pressed: "#ffffffb5";
                readonly activated: "#d6e9ff";
                readonly disabled: "#ffffff94";
                readonly feedback: {
                    readonly alert: "#fac7c7";
                    readonly warning: "#ffcd6b";
                    readonly success: "#bcdcbc";
                    readonly info: "#b8d9ff";
                };
                readonly onInteractive: {
                    readonly accent: "#003e8a";
                    readonly subtle: "#f0f7ff";
                    readonly alert: {
                        readonly accent: "#890101";
                        readonly subtle: "#fef6f6";
                    };
                };
            };
            readonly border: {
                readonly accent: "#ffffffa3";
                readonly subtle: "#ffffff85";
                readonly activated: "#d6e9ff";
                readonly disabled: "#ffffff78";
                readonly feedback: {
                    readonly alert: "#fac7c7";
                    readonly warning: "#ffcd6b";
                    readonly success: "#bcdcbc";
                    readonly info: "#b8d9ff";
                };
            };
            readonly background: {
                readonly "1": "#0b63cb";
                readonly "2": "#0857b4";
                readonly "3": "#024aa2";
            };
            readonly link: {
                readonly default: "#d6e9ff";
                readonly visited: "#ab7ce9";
            };
            readonly focus: {
                readonly default: "#d6e9ff";
                readonly inset: "#046eec0f";
            };
            readonly others: {
                readonly backdrop: "#0000006e";
                readonly divider: "#ffffff5c";
                readonly skeleton: "#ffffffa3";
            };
            readonly highlight: {
                readonly red: {
                    readonly "1": "#fdafaf";
                    readonly "2": "#fac7c7";
                    readonly "3": "#ffe0e0";
                };
                readonly blue: {
                    readonly "1": "#99c8ff";
                    readonly "2": "#b8d9ff";
                    readonly "3": "#d6e9ff";
                };
                readonly teal: {
                    readonly "1": "#68d4bf";
                    readonly "2": "#8de2d1";
                    readonly "3": "#bcf0e6";
                };
                readonly orange: {
                    readonly "1": "#fcb06e";
                    readonly "2": "#fdc99b";
                    readonly "3": "#fee1c8";
                };
                readonly ruby: {
                    readonly "1": "#f1b1ce";
                    readonly "2": "#f5c7dc";
                    readonly "3": "#f9dde9";
                };
                readonly purple: {
                    readonly "1": "#d2b8f4";
                    readonly "2": "#e0ccfa";
                    readonly "3": "#eee2fd";
                };
            };
        };
    };
    font: {
        readonly lineHeight: {
            readonly xxs: "100%";
            readonly xs: "116%";
            readonly sm: "128%";
            readonly md: "132%";
            readonly lg: "142%";
            readonly xl: "150%";
        };
        readonly weight: {
            readonly regular: 400;
            readonly medium: 500;
            readonly bold: 700;
        };
        readonly size: {
            readonly xxxs: "0.75rem";
            readonly xxs: "0.875rem";
            readonly xs: "1rem";
            readonly sm: "1.125rem";
            readonly md: "1.5rem";
            readonly lg: "1.75rem";
            readonly xl: "2.25rem";
            readonly xxl: "2.5rem";
        };
        readonly family: {
            readonly base: "Roboto";
        };
        readonly letterSpacing: {
            readonly sm: "0.01em";
            readonly md: "0.04em";
        };
    };
    opacity: {
        readonly level: {
            readonly "1": 0.04;
            readonly "2": 0.08;
            readonly "3": 0.12;
            readonly "4": 0.16;
            readonly "5": 0.24;
            readonly "6": 0.32;
            readonly "7": 0.48;
            readonly "8": 0.64;
            readonly "9": 0.8;
            readonly "10": 0.96;
        };
    };
    shadow: {
        readonly level: {
            readonly "1": "0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 5px 4px -4px rgba(0, 0, 0, 0.04)";
            readonly "2": "0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 2px 0px rgba(0, 0, 0, 0.04)";
            readonly "3": "0px 12px 12px -8px rgba(0, 0, 0, 0.17), 0px 0px 4px 0px rgba(0, 0, 0, 0.04)";
            readonly "4": "0px 32px 40px -16px rgba(0, 0, 0, 0.17), 0px 2px 6px 0px rgba(0, 0, 0, 0.1)";
            readonly "5": "0px 24px 48px -12px rgba(0, 0, 0, 0.23), 0px 48px 64px -24px rgba(0, 0, 0, 0.1)";
            readonly "6": "0px 24px 48px -8px rgba(0, 0, 0, 0.17), 0px 48px 64px -24px rgba(0, 0, 0, 0.17)";
        };
    };
    spacing: {
        readonly "1": "0.25rem";
        readonly "2": "0.5rem";
        readonly "3": "0.75rem";
        readonly "4": "1rem";
        readonly "5": "1.25rem";
        readonly "6": "1.5rem";
        readonly "8": "2rem";
        readonly "10": "2.5rem";
        readonly "12": "3rem";
        readonly "14": "3.5rem";
        readonly "16": "4rem";
        readonly "20": "5rem";
        readonly "24": "6rem";
        readonly "32": "8rem";
        readonly "40": "10rem";
        readonly "56": "14rem";
        readonly "72": "18rem";
    };
    shadowBrand: {
        readonly level: {
            readonly "1": "0px 1px 2px 0px #d6e9ff, 0px 5px 4px -4px #d6e9ff";
            readonly "2": "0px 2px 2px 0px #d6e9ff, 0px 0px 2px 0px #d6e9ff";
            readonly "3": "0px 12px 12px -8px #d6e9ff, 0px 0px 4px 0px #d6e9ff";
            readonly "4": "0px 32px 40px -16px #d6e9ff, 0px 2px 6px 0px #d6e9ff";
            readonly "5": "0px 24px 48px -12px #d6e9ff, 0px 48px 64px -24px #d6e9ff";
            readonly "6": "0px 24px 48px -8px #d6e9ff, 0px 48px 64px -24px #d6e9ff";
        };
    };
};
