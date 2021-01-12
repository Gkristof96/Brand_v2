import React from 'react'

const ContactCard = () => {
    return (
        <>
            <div className='contact-card'>
                <h1>Do you have a question?</h1>
                <h2>Complete this form, and we will answer it!</h2>
                <form>
                    <div className='input-group'>
                        <label>Name</label>
                        <input type="text" placeholder='Sebastion Montgomeri' />
                    </div>
                    <div className='input-group'>
                        <label>Email</label>
                        <input type="email" placeholder='sebastion@mail.com' />
                    </div>
                    <div className='input-group'>
                        <label>Name</label>
                        <textarea />
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}

export default ContactCard
