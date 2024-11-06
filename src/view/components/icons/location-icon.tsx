import { DefaultIcon } from "./default-icon/default-icon"
import { DefaultIconProps } from "./default-icon/default-icon-props"

export const LocationIcon = (props: DefaultIconProps) => {
    return (
        <>
            <DefaultIcon
                classname={props.classname}
                fill={props.fill}
                styles={props.styles}
                onClick={props.onClick}
            >
                <path d="M14.0371 25.997C20.5762 25.997 25.9902 20.5713 25.9902 14.0439C25.9902 7.50488 20.5645 2.09082 14.0254 2.09082C7.49804 2.09082 2.08398 7.50488 2.08398 14.0439C2.08398 20.5713 7.50976 25.997 14.0371 25.997ZM14.0371 24.0049C8.50586 24.0049 4.08789 19.5752 4.08789 14.0439C4.08789 8.5127 8.49414 4.08301 14.0254 4.08301C19.5567 4.08301 23.9981 8.5127 23.9981 14.0439C23.9981 19.5752 19.5684 24.0049 14.0371 24.0049Z" fill-opacity="0.85" />
                <path d="M7.6035 15.0283L12.5137 15.04C12.7363 15.04 12.8887 15.1806 12.8887 15.415V20.2666C12.8887 21.3096 13.9902 21.415 14.3418 20.665L19.5449 9.56738C19.9785 8.66504 19.1934 7.8916 18.2793 8.3252L7.21678 13.5752C6.45506 13.9385 6.57225 15.0283 7.6035 15.0283Z" fill-opacity="0.85" />
            </DefaultIcon>
        </>
    )
}