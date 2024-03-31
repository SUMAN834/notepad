import { ListItemButton } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import React, { ReactElement, ReactNode, useRef } from "react";

type MenuButtonProps = {
  menu: ReactElement;
  children: ReactNode;
  open?: boolean;
  onHoverOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  sx?: SxProps;
};

export default function MenuButton({
  menu,
  children,
  onOpen,
  onClose,
  onHoverOpen,
  open,
  sx,
}: MenuButtonProps) {
  const btnRef = useRef();

  return (
    <>
      <ListItemButton
        component={ListItemButton}
        ref={btnRef as any}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          m: 0.01,
          minWidth: "3.5rem",
          ...sx,
        }}
        variant={open ? "soft" : "plain"}
        onClick={onOpen}
        onMouseEnter={() => onOpen && onHoverOpen && onOpen()}
      >
        {children}
      </ListItemButton>

      {React.cloneElement(menu, {
        open: Boolean(open),
        onClose: onClose,
        anchorEl: btnRef.current,
        placement: "bottom-start",
      })}
    </>
  );
}
