



type FlappyButtonProps = {
    content: string;
};

const FlappyButton = ({ content }: FlappyButtonProps) => {
    return (
        <div
        className="bg-[#FFEB3B] border border-black rounded-lg shadow-lg 
                   flex items-center justify-center min-w-[200px] min-h-[50px]"
        style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
        }}
    >
        <p className="text-black">{content}</p>
    </div>
    
    );
};

export default FlappyButton;
