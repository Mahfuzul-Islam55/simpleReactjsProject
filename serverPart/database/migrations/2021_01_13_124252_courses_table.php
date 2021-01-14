<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses_table',function(Blueprint $table){
            $table->bigIncrements('id');
            $table->string('short_title');
            $table->string('short_des');
            $table->string('small_img');
            $table->string('long_title');
            $table->string('long_des');
            $table->string('total_lecture');
            $table->string('total_student');
            $table->string('skill_all');
            $table->string('video_url');
            $table->string('courses_link');
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
