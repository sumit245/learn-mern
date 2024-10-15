import React from 'react'

export default function IconButton({ icon, name, onClick, styles }) {
    return (
        <div onClick={onClick}>
            <i class={`fa-brands ${icon}`} style={{ height: 40, width: 40, fontSize: 36, color: 'red', ...styles }}></i>
            <span>{name}</span>
        </div>
    )
}
