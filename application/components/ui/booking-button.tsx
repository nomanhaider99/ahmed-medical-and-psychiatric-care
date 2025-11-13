import Link from "next/link"
import Button from "./button"

const BookingButton = (
    {
        btnVariant
    }: {
        btnVariant: 'primary' | 'secondary'
    }
) => {
    return (
        <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL as string} target="_blank">
            <Button
                text="Book an Appointment"
                variant={btnVariant}
            />
        </Link>
    )
}

export default BookingButton