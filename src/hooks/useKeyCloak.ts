import { useContext } from "react"
import { KeyCloakContext } from "../context/KeyCloakProvider"

export const useKeyCloak = () => {
    const context = useContext(KeyCloakContext)
    return context
}