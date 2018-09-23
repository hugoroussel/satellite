#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;
using std::string;



class Satellite : public eosio::contract {
  using contract::contract;
  account_name dpo_owner;

 public:

   //##################EMPLOYEES RELATED##################//

   /// @abi action
   void add(account_name _person, string _hash) {

     //verification commented for testing purposes
     //require_auth(dpo_owner)

     _employees employees_table(_self,_self);

     auto iterator = employees_table.find(_person);
     eosio_assert(iterator == employees_table.end(), "Employee hash is already in the table");

     employees_table.emplace(_self, [&](auto& emp) {
       emp.person = _person;
       emp.hash = _hash;
     });
     print("Added employee record hash.");
   }

   ///@abi action
   //TO DO : add other fields
   void update(account_name _person, string _hash){

     //TO DO : decide level of clearance
     //require_auth(???)
     _employees employees_table(_self, _self);
     auto iterator = employees_table.find(_person);
     eosio_assert(iterator != employees_table.end(), "No such employee in the table");

     employees_table.modify(iterator, _person, [&](auto& emp){
       emp.person = _person;
       emp.hash = _hash;
     });
     print("A record was modified.");

   }

   //should remove a specific record
   ///@abi action
   void deleterec(account_name _person){
     //require_auth(_person)
     _employees employees_table(_self, _self);
     auto iterator = employees_table.find(_person);
     eosio_assert(iterator != employees_table.end(), "No such employee in the table");

     employees_table.erase(iterator);
     print("Employee record deleted.");


   }
   //##################EMPLOYEES RELATED END##################//





   //remove all records from DB
   ///@abi action
   void dropall(){
     _employees employees_table(_self,_self);
     for (auto i=employees_table.begin();i!=employees_table.end();) {
       i  = employees_table.erase(i);
     }
     print("All data dropped.");


   }

   void printall(){
     _employees employees_table(_self,_self);
     for (auto i=employees_table.begin();i!=employees_table.end();) {
       print(i->hash);
       i++;
     }
   }

 private:

   /// @abi table employee
   //TO DO : add other parameters
   struct employee{
     account_name person;
     string hash;

     uint64_t primary_key() const {return person;}

     EOSLIB_SERIALIZE(employee,(person)(hash))
   };
   typedef multi_index<N(employee), employee> _employees;

   /// @abi table key
   struct key {
     account_name owner;
     string public_key;

     uint64_t primary_key() const {return owner;}

     EOSLIB_SERIALIZE(key, (owner)(public_key))
   };
   typedef multi_index<N(key), key> _keys;

   ///@abi table requests
   struct request{
     account_name from;
     account_name to;
     string description;

     uint64_t primary_key() const {return from;}

     EOSLIB_SERIALIZE(request, (from)(to))
   };
   typedef multi_index<N(request), request> _requests;


};

EOSIO_ABI( Satellite, (add)(update)(deleterec)(dropall)(printall))
