import statusBar from "../../assets/status-bar.png"
import { ContainerStatusBar, StatusBarImg } from "./StatusBarStyled"


export const StatusBar = ()=>{

    return(
        <ContainerStatusBar>
          <StatusBarImg src={statusBar} alt="Status bar" />
        </ContainerStatusBar>
    )
}