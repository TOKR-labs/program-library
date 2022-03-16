export class TokrizeArgs {
    instruction = 0;
    name: string;
    symbol: string;
    uri: string;
    mint_bump: number;
    mint_seed: string;
    constructor(fields: { name: string, symbol: string, uri: string, mint_bump: number, mint_seed: string } | undefined = undefined) {
      if (fields) {
        this.name = fields.name;
        this.symbol = fields.symbol;
        this.uri = fields.uri;
        this.mint_bump = fields.mint_bump;
        this.mint_seed = fields.mint_seed;
      }
    }
  }
  
  export const TokrizeSchema = new Map([
    [TokrizeArgs, {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['name', 'string'],
        ['symbol', 'string'],
        ['uri', 'string'],
        ['mint_bump', 'u8'],
        ['mint_seed', 'string']
      ]
    }],
  ]);
  
  
  export class VaultArgs {
    instruction = 1;
    vault_bump: number;
    vault_seed: string;
    constructor(fields: { vault_bump: number, vault_seed: string } | undefined = undefined) {
      if (fields) {
        this.vault_bump = fields.vault_bump;
        this.vault_seed = fields.vault_seed;
      }
    }
  }
  
  export const VaultSchema = new Map([
    [VaultArgs, {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['vault_bump', 'u8'],
        ['vault_seed', 'string']
      ]
    }],
  ]);
  
  export class AddTokenArgs {
    instruction = 2;
  }
  
  export const AddTokenSchema = new Map([
    [AddTokenArgs, {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
      ]
    }],
  ]);