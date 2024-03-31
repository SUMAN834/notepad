/* eslint-disable no-constant-condition */
import { updateNotepad } from "@/redux/reducers/notepad";
import { RootState } from "@/redux/store";
import {
  Box,
  Input,
  Sheet,
  Typography
} from "@mui/joy";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type TitleBarProps = {
  title?: string;
};

export default function TitleBar({ title = "Untitled" }: TitleBarProps) {
  const [profileOpen, setProfileOpen] = useState<EventTarget | null>(null);
  const dispatch = useDispatch();
  const {
    content: notepadContent,
    name: notepadName,
    id: notepadId,
  } = useSelector((store: RootState) => store.notepad);

  useEffect(() => {
    if (!notepadName) dispatch(updateNotepad({ name: "Untitled" }));
  }, []);

  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3rem",
      }}
    >
      <Typography padding={1} display="flex" alignItems="center">
        <Image
          style={{ marginRight: ".5rem" }}
          src="/assets/images/logo.png"
          alt={""}
          width={24}
          height={24}
        />
        <Box
          sx={{ marginRight: "1.5rem" }}
          component="span"
          className="notepad-logo-font"
          fontSize="1.25rem"
        >
          Notepad
        </Box>
      </Typography>

      <Input
        variant="plain"
        color="neutral"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          ":focus-visible": {
            outline:
              "solid 1px rgba(var(--joy-palette-neutral-mainChannel) / .75)",
          },
          textAlign: "center",
          maxWidth: "8rem",
        }}
        slotProps={{
          input: {
            style: {
              textAlign: "center",
            },
          },
        }}
        size="sm"
        value={notepadName}
        required
        onChange={e => {
          if (!e.target.value) return;
          dispatch(
            updateNotepad({
              name: e.target.value,
            })
          );
        }}
      />
    </Sheet>
  );
}
