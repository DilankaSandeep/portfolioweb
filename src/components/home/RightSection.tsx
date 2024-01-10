import image from "../../assets/bannerImage/8e88140406559f1198926991a8faec41(1).png";
export const RightSection = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={image}
                alt="bannerImg"
            />
            <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    );
};