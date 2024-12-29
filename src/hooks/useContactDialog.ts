import { useState } from 'react';

interface ContactDialogOptions {
  title?: string;
  description?: string;
  defaultMessage?: string;
  onSubmit?: (data: any) => void;
}

export function useContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ContactDialogOptions>({});

  const openContactDialog = (newOptions?: ContactDialogOptions) => {
    if (newOptions) {
      setOptions(newOptions);
    }
    setIsOpen(true);
  };

  return {
    isOpen,
    setIsOpen,
    options,
    openContactDialog,
  };
}