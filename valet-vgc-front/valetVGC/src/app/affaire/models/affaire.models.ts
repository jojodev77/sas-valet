export interface Affaire {
    affairId: number;
    affairCode: number;
    affairCreateDate: string;
    affairToDelivreDate: string;
    affairShema: any;
    affairNumberToCreate: number;
    affairNumberDelivred: number;
    affairValidator: boolean;
    affairClientLabel: string;
}
