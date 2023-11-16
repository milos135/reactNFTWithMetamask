export interface NFT {
  id: string;
  name: string;
  description: string;
  image_url: string;
  background_color: string;
  asset_contract: { chain_identifier: string };
}
