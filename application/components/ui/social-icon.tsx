const SocialIcon = (
    {
        icon
    }: {
        icon: React.ReactElement
    }
) => {
  return (
    <div className="flex justify-center items-center border-[1px] border-zinc-200/50 rounded-full p-2 hover:scale-110 transition-all cursor-pointer">
        {icon}
    </div>
  )
}

export default SocialIcon