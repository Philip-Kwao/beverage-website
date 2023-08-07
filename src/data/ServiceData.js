import { BsBoxSeam } from "react-icons/bs";
import { LuHardHat } from "react-icons/lu"
import { GiOilPump } from "react-icons/gi"
import { MdOutlineCleaningServices } from "react-icons/md"
import { GiVacuumCleaner } from "react-icons/gi"

export const ServiceDetails = [
    {
        id: 1,
        title: "General Merchant",
        detail: "JASAKA COMPANY LIMITED is a general merchandise supplies company.  We source, market, and distribute a wide range of products meeting with high standards, and defined specifications to meet individual and corporate needs.",
        icon: <BsBoxSeam />
    },
    {
        id: 2,
        title: "BUILDING & ROAD CONSTRUCTION",
        detail: "Our team includes structural engineers, service technicians, and project managers who can design, plans, manage, and complete different types of Building, Road and civil works in different contexts",
        icon: <LuHardHat />
    },
    {
        id: 3,
        title: "OIL AND GAS SUPPORT SERVICES",
        detail: "We are registered company with Ghana Petroleum Commission to provide oil and gas support services in a wide range of services i. safety equipment inspection, sandblasting and coating, wire rope sling manufacturing and supply of oil and  gas equipment and other services related.",
        icon: <GiOilPump />
    },
    {
        id: 4,
        title: "Cleaning Services",
        detail: "Our team of expect provides both domestic and industrial cleaning services to the satisfaction of our customers.",
        icon: <GiVacuumCleaner />
    },
]