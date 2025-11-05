import { useForm } from 'react-hook-form';

const Form=()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form >

    </form>
  );
}

export default Form