module.exports = {
  kw_let: _ => 'let',
  structural_kw: $ => 'structural',
  unique_kw: $ => 'unique',
  type_kw: $ => 'type',
  pipe: $ => '|',
  match: $ => 'match',
  cases: $ => 'cases',
  pipe: $ => '|',
  otherwise: $ => 'otherwise',
  as: $ => '@',
  structural: $ => 'structural',
  unique: $ => 'unique',
  ability: $ => 'ability',
  where: $ => 'where',
  or: $ => '||',
  and: $ => '&&',
  kw_forall: $ => choice("forall", "∀"),
  kw_equals: $ => '=',
  type_signature_colon: $ => ':',
  kw_termlink: $ => 'termLink',
  kw_typelink: $ => 'typeLink',
  handle: $ => 'handle',
  with: $ => 'with',
}