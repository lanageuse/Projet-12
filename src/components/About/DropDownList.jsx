import DropDown from '../Dropdown';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';

function DropDownList({ dropDownList }) {
  const { data, status, error } = dropDownList;

  if (status === 'fetching') return <Loading />;
  if (status === 'fail') return <ErrorMessage error={error} />;

  return (
    <>
      {data.map((drop, index) => (
        <DropDown key={index} title={drop.title} content={drop.content} />
      ))}
    </>
  );
}

export default DropDownList;
