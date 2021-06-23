<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = ['listing_id', 'listing_title'];

    protected $primaryKey = 'unique_id';
    protected $keyType = 'string';
    public $incrementing = false;
    
}
