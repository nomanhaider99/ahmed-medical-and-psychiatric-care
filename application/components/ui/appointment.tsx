'use client'

import React, { useState } from 'react'
import Button from './button'
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'
import toast from 'react-hot-toast'

const Appointment = () => {
    const [patient_name, setpatient_name] = useState('')
    const [insurance_provider, setinsurance_provider] = useState('')
    const [phone_number, setphone_number] = useState('')
    const [reason, setreason] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisabled(true);

        const data = { patient_name, insurance_provider, phone_number, reason };

        if (patient_name.trim() === '' || insurance_provider.trim() === '' || phone_number.trim() === '' || reason.trim() === '') { 
            toast.error('Please fill out all fields before submitting.');
            setDisabled(false);
            return;
        }

        try {
            const response = await fetch(`/api/mail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                toast.error(
                    result?.message || 'Something went wrong. Please try again later.'
                );
                return;
            }

            toast.success('Your appointment request has been submitted successfully.');

            // Optional reset
            setpatient_name('');
            setinsurance_provider('');
            setphone_number('');
            setreason('');

        } catch (error) {
            console.error(error);
            toast.error('Network error. Please check your connection and try again.');
        } finally {
            setDisabled(false);
        }
    }

    return (
        <div className='w-full flex flex-col gap-8 items-center pb-10 md:px-0 px-4'>
            <div className='w-full flex flex-col items-center md:gap-1 gap-3 leading-none'>
                <h1 className='md:text-[4rem] text-[2.5rem] tracking-tight font-bold text-brand-primary'>
                    Schedule Your Appointment
                </h1>
                <p className='md:text-xl text-vivid-green'>
                    Please fill in all required details for better assistance.
                </p>
            </div>

            <form onSubmit={handleSubmit} className='md:w-1/2 w-full flex flex-col gap-3 text-lg'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <Label>Patient Name</Label>
                        <Input
                            placeholder='John A. Smith'
                            onChange={(e) => setpatient_name(e.target.value)}
                            value={patient_name}
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <Label>Insurance Provider</Label>
                        <Input
                            placeholder='Blue Cross Blue Shield'
                            onChange={(e) => setinsurance_provider(e.target.value)}
                            value={insurance_provider}
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <Label>Phone Number</Label>
                        <Input
                            placeholder='(312) 555-0198'
                            type='tel'
                            onChange={(e) => setphone_number(e.target.value)}
                            value={phone_number}
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <Label>Reason to Visit</Label>
                        <Textarea
                            placeholder='Experiencing anxiety and difficulty sleeping over the past few weeks.'
                            className='min-h-[150px]'
                            onChange={(e) => setreason(e.target.value)}
                            value={reason}
                        />
                    </div>
                </div>

                <Button
                    text={disabled ? 'Scheduling...' : 'Schedule'}
                    variant='primary'
                    ButtonType='submit'
                    disabled={disabled}
                />
            </form>
        </div>
    )
}

export default Appointment
