import React from 'react'
import Layout from '../Shared/Layout'
import { useForm, usePage } from '@inertiajs/react'


function Contact() {
  const pageData = usePage().props;
  console.log(pageData);
  const { data, setData, post, processing, errors } = useForm({
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    post("/send_message")
  }
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <lable htmlFor="subject">
          Subject
          <input name='subject' id='subject' placeholder='Enter Subject'
            onChange={e => setData("subject", e.target.value)}
          />
        </lable>
        {errors.subject ? <div>{errors.subject}</div> : ""}
        <label htmlFor="message">
          Message
          <textarea name="message" id="message" cols="30" rows="10"
            onChange={e => setData("message", e.target.value)}
          ></textarea>
        </label>
        {errors.message ? <div>{errors.message}</div> : ""}
        <button type='submit'>Send</button>
      </form>
      {pageData.flash.message ? 
    <div className={'alert '+pageData.flash.type}>{pageData.flash.message} </div> : ""  
    }
    </div>
  )
}

export default Contact
Contact.layout = page => <Layout title="Contact Page" children={page} />