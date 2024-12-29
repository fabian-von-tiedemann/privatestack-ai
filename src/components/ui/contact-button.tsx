import { Button } from "./button";
import { useContactDialog } from "@/hooks/useContactDialog";
import { ContactDialog } from "./contact-dialog";

interface ContactButtonProps {
  title?: string;
  description?: string;
  defaultMessage?: string;
  onSubmit?: (data: any) => void;
  children?: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function ContactButton({ 
  title,
  description,
  defaultMessage,
  onSubmit,
  children = "Kontakta oss",
  variant = "default",
  size = "default",
  className,
}: ContactButtonProps) {
  const { isOpen, setIsOpen, openContactDialog } = useContactDialog();

  return (
    <>
      <Button
        variant={variant === 'default' ? 'default' : 'outline'}
        size={size}
        onClick={() => openContactDialog({ title, description, defaultMessage, onSubmit })}
        className={className}
      >
        {children}
      </Button>

      <ContactDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        title={title}
        description={description}
        defaultMessage={defaultMessage}
        onSubmit={onSubmit}
      />
    </>
  );
}