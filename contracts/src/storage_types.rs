use soroban_sdk::{contracttype, Address};

/// Storage keys for the contract
#[derive(Clone)]
#[contracttype]
pub enum DataKey {
    /// Stores the admin's Ed25519 public key (32 bytes)
    AdminPublicKey,
    /// Tracks if the contract has been initialized
    Initialized,
}

/// Payload structure that the admin signs off-chain
/// The user submits this along with the signature to mint tokens
#[derive(Clone, Debug, Eq, PartialEq)]
#[contracttype]
pub struct MintPayload {
    /// The user's address who is allowed to mint
    pub user: Address,
    /// The savings level or amount the user is claiming
    pub amount: i128,
    /// Unix timestamp when the signature was created
    pub timestamp: u64,
    /// Expiry duration in seconds (signature valid for timestamp + expiry_duration)
    pub expiry_duration: u64,
}
