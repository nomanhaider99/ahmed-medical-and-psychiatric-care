import { detailedServicesData } from "@/data/services"

export const getCurrentRouteService = (name: string) => {
    const data = detailedServicesData.find((value) => value.title == name);
    return data;
}