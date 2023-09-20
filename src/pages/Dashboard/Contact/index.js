import './style.css';
import React from 'react';
import {useFormik} from 'formik';
import validationSchema from './validations'



function Contact() {
  const {handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched} = useFormik({
    initialValues:{
     firstName: '',
     lastName: '',
     email: '',
     message: '',
    },

    onSubmit: async (values, bag) => {
       await new Promise((r) => setTimeout(r, 1000));
       console.log(values);

       bag.resetForm()
    },
    validationSchema,
  });

  return (
    <div className='iletisim'>
       <h2>comunications</h2>
         <form onSubmit={handleSubmit} className="form">
         <div>
           <label htmlFor="firstName" > first name </label>
           <input 
            id='firstName'
            name='firstName'
            placeholder='john'
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange('firstName')}
            onBlur={handleBlur('firsName')}
 
          />
          {errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div> }
            
           </div>
           <div>
           <label htmlFor="lastName" > last name </label>
           <input 
            id='lastName'
            name='lastName'
            placeholder='john'
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
 
          />
          {errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div> }
            
           </div>
           <div>
           <label htmlFor="email" > Email </label>
           <input 
            id='email'
            name='email'
            placeholder='john@dms.com'
            value={values.email}
            disabled={isSubmitting}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
 
          />
          {errors.email && touched.email && <div className='error'>{errors.email}</div> }
            
           </div>
           <div>
           <label htmlFor="message" > message </label>
           <textarea
            id='message'
            name='message'
            placeholder='message'
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange('message')}
            onBlur={handleBlur('message')}
 
          />
          {errors.message && touched.message && <div className='error'>{errors.message}</div> }


            
           </div>
           <button type="submit" disabled={isSubmitting}>submit</button>
           </form>
 

      </div>
  )
}

export default Contact