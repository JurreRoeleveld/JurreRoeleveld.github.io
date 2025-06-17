import {
    Send,
    Plane,
    Building,
    Calendar,
    Compass,
} from "lucide-react"
import type { ElementType } from "react"

export interface NavItem {
    title: string
    id: string
    url: string
    icon: ElementType
    isActive: boolean
    items?: NavItem[]
}

export const navigationData: {
    navMain: NavItem[]
    navSecondary: NavItem[]
} = {
    navMain: [
        {
            title: "Reis",
            id: "reis",
            url: "#",
            icon: Plane,
            isActive: true,
            items: [
                {
                    title: "Heen",
                    url: "#",
                    id: "flight-page",
                    icon: Plane,
                    isActive: false,
                },
                {
                    title: "Terug",
                    url: "#",
                    id: "flight-return-page",
                    icon: Plane,
                    isActive: false,
                },
            ],
        },
        {
            title: "Accomodatie",
            id: "accomodatie",
            url: "#",
            icon: Building,
            isActive: true,
            items: [
                {
                    title: "Appartement",
                    url: "#",
                    id: "appartement",
                    icon: Building,
                    isActive: false,
                },
            ],
        },
        {
            title: "Planning",
            id: "planning",
            url: "#",
            icon: Calendar,
            isActive: true,
            items: [
                {
                    title: "Greyhound Racing",
                    url: "#",
                    id: "greyhound-racing",
                    icon: Calendar,
                    isActive: false,
                },
                {
                    title: "Guinness Tour",
                    url: "#",
                    id: "guinness-tour",
                    icon: Calendar,
                    isActive: false,
                },
            ],
        },
        {
            title: "Ontdek",
            id: "ontdek",
            url: "#",
            icon: Compass,
            isActive: true,
            items: [
                {
                    title: "Trinity College",
                    url: "#",
                    id: "trinity-college",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "Dublin Castle",
                    url: "#",
                    id: "dublin-castle",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "National Museum",
                    url: "#",
                    id: "national-museum",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "Kilmainham Gaol",
                    url: "#",
                    id: "kilmainham-gaol",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "St. Patrick's Cathedral",
                    url: "#",
                    id: "st-patricks-cathedral",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "Phoenix Park",
                    url: "#",
                    id: "phoenix-park",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "Grafton Street",
                    url: "#",
                    id: "grafton-street",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "Christ Church Cathedral",
                    url: "#",
                    id: "christ-church-cathedral",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "The Spire",
                    url: "#",
                    id: "the-spire",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "Jameson Distillery",
                    url: "#",
                    id: "jameson-distillery",
                    icon: Compass,
                    isActive: false,
                },
                {
                    title: "The Brazen Head",
                    url: "#",
                    id: "the-brazen-head",
                    icon: Compass,
                    isActive: false,
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Feedback",
            id: "feedback",
            url: "#",
            icon: Send,
            isActive: false,
        },
    ],
} 