'use client'

import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        imageName: '',
        imageSize: '',
        imageFile: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            imageFile: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('imageName', formData.imageName);
        form.append('imageSize', formData.imageSize);
        form.append('imageFile', formData.imageFile);

        try {
            const response = await axios.post('http://localhost/admin/api/addtest', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="imageName">نام عکس:</label>
                <input
                    type="text"
                    id="imageName"
                    name="imageName"
                    value={formData.imageName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="imageSize">اندازه عکس:</label>
                <input
                    type="text"
                    id="imageSize"
                    name="imageSize"
                    value={formData.imageSize}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="imageFile">عکس:</label>
                <input
                    type="file"
                    id="imageFile"
                    name="imageFile"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">ارسال</button>
        </form>
    );
}

export default Form;
