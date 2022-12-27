import { Box } from '@mantine/core';

export const Stain = ({
  blur,
  radius,
  transform,
  color,
  variant,
  ...props
}: any) => {
  const setVariant = (theme: any) => {
    switch (variant) {
      case 1:
        return {
          background: `conic-gradient(
    ${
      color && color != ''
        ? theme.colors.yellow[5]
        : theme.colors[theme.primaryColor][5]
    } 0deg,
    ${
      color && color != ''
        ? theme.colors.yellow[5]
        : theme.colors[theme.primaryColor][5]
    } 45deg,
    transparent 90deg,
    transparent 135deg,
    transparent 180deg,
    transparent 225deg,
    ${
      color && color != ''
        ? theme.colors.red[5]
        : theme.colors[theme.primaryColor][5]
    } 270deg,
    ${
      color && color != ''
        ? theme.colors.orange[5]
        : theme.colors[theme.primaryColor][5]
    }  315deg,
    ${
      color && color != ''
        ? theme.colors.yellow[5]
        : theme.colors[theme.primaryColor][5]
    }  360deg
    )`,
        };
      case 2:
        return {
          background: `conic-gradient(
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 0deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 45deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 90deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 135deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 180deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 225deg,
    transparent 270deg,
    transparent 315deg,
    transparent 360deg
    )`,
        };
      case 3:
        return {
          background: `conic-gradient(
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 0deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 45deg,
    transparent 90deg,
    transparent 135deg,
    transparent 180deg,
    transparent 225deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 270deg,
    transparent 315deg,
    transparent 360deg
    )`,
        };
      default:
        return {
          background: `conic-gradient(
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 0deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 45deg,
    transparent 90deg,
    transparent 135deg,
    transparent 180deg,
    transparent 225deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 270deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 315deg,
    ${
      color && color != ''
        ? theme.colors[color][5]
        : theme.colors[theme.primaryColor][5]
    } 360deg
    )`,
        };
    }
  };

  return (
    <Box
      style={{
        filter: `blur(${blur}px)`,
        borderRadius: radius,
        transform: `translate(${transform})`,
        position: 'absolute',
        zIndex: -1,
      }}
      {...props}
      sx={(theme: any) => {
        return setVariant(theme);
      }}
    ></Box>
  );
};
