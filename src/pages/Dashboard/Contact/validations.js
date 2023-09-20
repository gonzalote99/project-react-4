import {object, string} from 'yup';

const contactSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required(),
  message: string().min(5).required(),
  
});

export default contactSchema;