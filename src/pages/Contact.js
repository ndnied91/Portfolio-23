import { Form } from 'react-router-dom';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import FormInput from '../components/FormInput';

import Socials from '../components/Socials';

import Swal from 'sweetalert2';

const SERVICE_ID = 'service_cbw4zqj';
const TEMPLATE_ID = 'template_1ynkh3g';
const USER_ID = 'asE6N7JDBIeitDxq_';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const handleOnSubmit = async (e) => {
    setIsSending(true);
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        USER_ID
      );

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      }
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: 'success',
        title: 'Unable to send message',
      });
    }

    setIsSending(false);

    e.target.reset();
  };

  return (
    <section className="p-10 lg:p-0 place-items-center md:m-auto pt-6 md:w-3/5 ">
      <h2 className="text-4xl tracking-tight font-extrabold text-center md:pt-5">
        Contact Me!
      </h2>
      <Form className="space-y-8" onSubmit={(e) => handleOnSubmit(e)}>
        <FormInput
          label={'Email'}
          name={'reply_to'}
          type={'email'}
          placeholder={'Email'}
        />
        <FormInput
          label={'Name'}
          name={'from_name'}
          type={'text'}
          placeholder={'Name'}
        />

        <FormInput
          label={'Message'}
          name={'message'}
          type={'input'}
          inputType={'textarea'}
          placeholder={'Write a message..'}
        />

        <button
          type="submit"
          className="btn btn-block btn-primary"
          disabled={isSending}
        >
          {isSending ? (
            <span className="loading loading-spinner"> Sending...</span>
          ) : (
            'Submit'
          )}
        </button>
      </Form>

      <Socials className="mb-2" />
    </section>
  );
};

export default Contact;
