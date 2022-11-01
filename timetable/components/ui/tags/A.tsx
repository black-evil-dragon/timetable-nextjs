import Link from "next/link"
import { LinkProps } from "../../../types"

const A: React.FunctionComponent<LinkProps> = ({text, href}) => {
    return (
        <Link href={href}>
            {text}
        </Link>
    )
}
export default A