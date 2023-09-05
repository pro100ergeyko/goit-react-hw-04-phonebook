import { ItemContact, DeleteContactBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ItemContact>
      {name} : {number}
      <DeleteContactBtn type="button" onClick={() => onDelete(id)}>
        Delete contact
      </DeleteContactBtn>
    </ItemContact>
  );
};
