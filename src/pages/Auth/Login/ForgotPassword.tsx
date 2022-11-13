import { Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";

interface ForgotPassPropsp {
  opened: boolean,
  setOpened: (val: boolean) => void
}
export default function ForgotPassword({opened, setOpened}: ForgotPassPropsp) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Forgot your password?"
      centered
    >
      <TextInput label="Your email" placeholder="me@rahul.dev" mb={'md'} />
      <Button fullWidth>Reset password</Button>
    </Modal>
  )
}
