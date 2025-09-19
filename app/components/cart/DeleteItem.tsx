import { CartItemType } from "@/app/types/cart";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";

interface DeleteItemProps {
  item: CartItemType;
  onDelete: (id: number) => void;
}

function DeleteItem({ item, onDelete }: DeleteItemProps) {
  function handleClick() {
    onDelete(item.id);
    toast.success("Item was deleted successfullyy");
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className="text-red-500 hover:bg-red-100 rounded-full"
      onClick={handleClick}
    >
      <Trash />
    </Button>
  );
}

export default DeleteItem;
