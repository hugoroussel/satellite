#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

class satellite : public eosio::contract {

  public:
    using contract::contract;

    /// @abi action
    void hello() {
      print("Hello world");
    }

};

EOSIO_ABI( satellite, (hello) )
