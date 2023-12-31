interface Props {
    children: any
}
import Filter from "@/blocks/molecules/filter"
import PropertyHalfPage from "@/blocks/molecules/property-half-page"
const Layout: React.FC<Props> = ({ children }) => (
    <>
        <PropertyHalfPage title="Start Renting Properties" />
        <Filter />
        {/* <Exclusive type="rent" /> */}
        {children}
    </>
)
export default Layout