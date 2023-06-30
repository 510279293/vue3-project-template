import { 
    Toast,
    Button,
    Cell,
    CellGroup,
    Icon,
    Popup,
    Col,
    Row,
    NoticeBar,
    Swipe,
    SwipeItem,
    Overlay,
    Form,
    Field,
    Dialog,
    Tabbar, 
    TabbarItem,
    Tab, 
    Tabs,
    Card
} from 'vant';

export function useVant(app: any) {
    [
        Toast,
        Button,
        Cell,
        CellGroup,
        Icon,
        Popup,
        Col,
        Row,
        NoticeBar,
        Swipe,
        SwipeItem,
        Overlay,
        Form,
        Field,
        Dialog,
        Tabbar, 
        TabbarItem,
        Tab, 
        Tabs,
        Card
    ].forEach(vc => app.use(vc))
}