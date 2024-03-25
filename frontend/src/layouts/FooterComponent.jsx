import React from 'react'

export default function FooterComponent() {
    const date = new Date().getFullYear();
    return (
        <div>
            <footer className='footer'>
            <spam className='text-muted'>All Rights Reserved {date} &copy;Abin Tamang</spam>
            </footer>
        </div>
    )
}
