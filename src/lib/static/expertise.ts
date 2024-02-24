import { faObjectGroup, faServer } from "@fortawesome/free-solid-svg-icons";
import type { Expertise } from "../types";

export const expertise: Expertise[] = [
    {
        title: 'data.expertise.frontend.title',
        info: 'data.expertise.frontend.info',
        icon: faObjectGroup,
    },
    {
        title: 'data.expertise.backend.title',
        info: 'data.expertise.backend.info',
        icon: faServer,
    }
];
