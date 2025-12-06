interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary' | 'rounded-circular';
    disabled?: boolean;
}

const Button = (
    {
        disabled = false,
        text,
        variant = 'primary'
    }: ButtonProps
) => {
    let className: string = '';
    switch (variant) {
        case 'primary':
            className = 'bg-vivid-azure shadow-vivid-azure shadow-2xs text-white font-medium px-4 py-2 rounded-lg cursor-pointer w-full '
            break;
        case 'secondary':
            className = 'bg-white text-dark-gray font-medium px-4 py-2 rounded-lg border-[1px] border-dark-gray cursor-pointer'
            break;
        case 'rounded-circular':
            className = 'bg-white rounded-full text-dark-gray font-medium px-4 py-2 border-dark-gray cursor-pointer'
            break;
        default:
            className = 'text-center w-full'
            break;
    }
  return (
    <button
        className={className}
        disabled={disabled}
    >
        {text}
    </button>
  )
}

export default Button