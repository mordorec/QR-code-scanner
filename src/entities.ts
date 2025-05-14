export interface Item {
    id: number;
    title: string;
    date: string;
}

export interface ScanResult {
    rawValue: string;
}

export interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface QrHandlers {
    onRemove: (id: number, e: React.MouseEvent) => void;
    onOpen: (qr: Item) => void;
}

export interface QrItemProps extends QrHandlers {
    qr: Item;
}

export interface QrListProps extends QrHandlers {
    sortedAndSearchedQRs: Item[];
}

export interface QrFilterProps {
    filter: {
      sort: string;
      query: string;
    };
    setFilter: React.Dispatch<React.SetStateAction<{
      sort: string;
      query: string;
    }>>;
}

export interface MySelectProps {
    options: Array<{value: string, name: string}>;
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

export interface MyModalProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MyButtonProps {
    title: string,
    onClick: () => void
}

export interface MyPaginationProps<T> {
    items: T[];
    itemsPerPage: number;
    renderItems: (paginatedItems: T[]) => React.ReactNode;
}
