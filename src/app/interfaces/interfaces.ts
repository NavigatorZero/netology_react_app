export interface Interfaces {
    name: string;
}

export interface IServerListData {
    data?: IServerListDataItem[]
}

export interface IServerListDataItem {
    direction: IDirection
    groups: IGroups
}

export interface IDirection {
    bage: IBage
    id: string;
    link: string;
    title: string;
    items?: IDirection[];
}

export interface IGroups extends IDirection {
    items: [];
}

export interface IBage {
    text: string;
    color: string;
    bgColor: string;
}
