import { FilterInput, FindLabel } from './ContactFilter.styled';

export const ContactFilter = ({ filter, onFilter }) => {
  return (
    <>
      <FindLabel>Find contacts by name</FindLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </>
  );
};
