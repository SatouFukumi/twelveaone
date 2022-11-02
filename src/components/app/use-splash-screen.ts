import create from "zustand"

interface UseSplashScreen {
    show: boolean
    set: (s: boolean) => void
}

const useSplashScreen = create<UseSplashScreen>((set) => ({
    show: true,
    set: (s: boolean) => set({ show: s }),
}))

export default useSplashScreen
