<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class HomeEtc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_etc',function(Blueprint $table){
            $table->bigIncrements('id');
            $table->string('home_title');
            $table->string('home_subtitle');
            $table->string('tech_description');
            $table->string('total_project');
            $table->string('total_client');
            $table->string('video_description');
            $table->string('video_url');
         
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
